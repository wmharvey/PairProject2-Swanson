var events = [];

$(function() {

  // animate the banner
  $("#highlights").tvCredits({direction: 'left', speed: 300000,});

  // add press-releases
  getData();

  function getData() {
    $.ajax({
      type: 'HEAD',
      url: 'data/releases.json',
      success: compareETags
    });
  };

  function compareETags(data, status, xhr) {
    eTag = xhr.getResponseHeader('eTag');
    if (eTag === localStorage.getItem('eTag')) {
    console.log('cache hit');
    fetchFromLS();
    } else {
    console.log('cache miss');
    fetchFromJSON(eTag);
    }
  };

  function fetchFromLS() {
    var stringArray = localStorage.getItem('releases');
    var releasesArray = JSON.parse(stringArray);
    releasesArray.forEach(function(item) {
      events.push(item);
    });
    initReleases();
  };

  function fetchFromJSON (eTag) {
    console.log('fetch from JSON');
    $.getJSON('data/releases.json', function(data) {
      events = data;
      localStorage.setItem('releases', JSON.stringify(data));
      initReleases();
    })
    .done(function() {
      localStorage.setItem('eTag', eTag);
    });
  };

  function initReleases() {
    $.get('templates/press-releases.handlebars', function(data) {
      var template = Handlebars.compile(data);
      events.forEach(function(item) {
        var compiledHtml = template(item);
        $('#updates').append(compiledHtml);
      });
    });
  }


})
