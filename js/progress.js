/* Dispatcher Academy — Progress Tracker
   localStorage-based progress tracking.
   No backend, all data stays in the browser. */

var Progress = (function() {
  var STORAGE_KEY = 'dispatcher_academy_progress';

  var TOTAL_CHAPTERS = 9;
  var TOTAL_GLOSSARY = 110;
  var TOTAL_SCENARIOS = 21;

  function getAll() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return createEmpty();
      var data = JSON.parse(raw);
      // Ensure structure integrity
      if (!data.chapters) data.chapters = {};
      if (!data.glossary) data.glossary = {};
      if (!data.scenarios) data.scenarios = {};
      return data;
    } catch (e) {
      return createEmpty();
    }
  }

  function createEmpty() {
    return {
      chapters: {},   // { "1": true, "3": true, ... }
      glossary: {},    // { "termId": true, ... }
      scenarios: {}    // { "scenarioId": true, ... }
    };
  }

  function saveAll(data) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
      // localStorage full or unavailable
    }
  }

  // ===== CHAPTERS =====

  function markChapterRead(chapterNum) {
    var data = getAll();
    data.chapters[String(chapterNum)] = true;
    saveAll(data);
  }

  function unmarkChapterRead(chapterNum) {
    var data = getAll();
    delete data.chapters[String(chapterNum)];
    saveAll(data);
  }

  function isChapterRead(chapterNum) {
    var data = getAll();
    return data.chapters[String(chapterNum)] === true;
  }

  function getReadChaptersCount() {
    var data = getAll();
    return Object.keys(data.chapters).length;
  }

  // ===== GLOSSARY =====

  function markTermViewed(termId) {
    var data = getAll();
    data.glossary[String(termId)] = true;
    saveAll(data);
  }

  function isTermViewed(termId) {
    var data = getAll();
    return data.glossary[String(termId)] === true;
  }

  function getViewedTermsCount() {
    var data = getAll();
    return Object.keys(data.glossary).length;
  }

  // ===== SCENARIOS =====

  function markScenarioCompleted(scenarioId) {
    var data = getAll();
    data.scenarios[String(scenarioId)] = true;
    saveAll(data);
  }

  function isScenarioCompleted(scenarioId) {
    var data = getAll();
    return data.scenarios[String(scenarioId)] === true;
  }

  function getCompletedScenariosCount() {
    var data = getAll();
    return Object.keys(data.scenarios).length;
  }

  // ===== EXPORT / IMPORT =====

  function exportData() {
    var data = getAll();
    data._exported = new Date().toISOString();
    data._version = 1;
    return JSON.stringify(data, null, 2);
  }

  function importData(jsonString) {
    try {
      var data = JSON.parse(jsonString);
      if (!data.chapters && !data.glossary && !data.scenarios) {
        return { success: false, error: 'invalid_format' };
      }
      if (!data.chapters) data.chapters = {};
      if (!data.glossary) data.glossary = {};
      if (!data.scenarios) data.scenarios = {};
      // Remove meta fields before saving
      delete data._exported;
      delete data._version;
      saveAll(data);
      return { success: true };
    } catch (e) {
      return { success: false, error: 'parse_error' };
    }
  }

  // ===== RESET =====

  function resetAll() {
    saveAll(createEmpty());
  }

  // ===== STATS =====

  function getStats() {
    var data = getAll();
    var readChapters = Object.keys(data.chapters).length;
    var viewedTerms = Object.keys(data.glossary).length;
    var completedScenarios = Object.keys(data.scenarios).length;

    return {
      chapters: { done: readChapters, total: TOTAL_CHAPTERS },
      glossary: { done: viewedTerms, total: TOTAL_GLOSSARY },
      scenarios: { done: completedScenarios, total: TOTAL_SCENARIOS },
      overallPercent: Math.round(
        ((readChapters / TOTAL_CHAPTERS) * 40 +
         (viewedTerms / TOTAL_GLOSSARY) * 30 +
         (completedScenarios / TOTAL_SCENARIOS) * 30)
      )
    };
  }

  // Public API
  return {
    markChapterRead: markChapterRead,
    unmarkChapterRead: unmarkChapterRead,
    isChapterRead: isChapterRead,
    getReadChaptersCount: getReadChaptersCount,
    markTermViewed: markTermViewed,
    isTermViewed: isTermViewed,
    getViewedTermsCount: getViewedTermsCount,
    markScenarioCompleted: markScenarioCompleted,
    isScenarioCompleted: isScenarioCompleted,
    getCompletedScenariosCount: getCompletedScenariosCount,
    exportData: exportData,
    importData: importData,
    resetAll: resetAll,
    getStats: getStats,
    getAll: getAll
  };
})();
