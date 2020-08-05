/**
 * 2007-2020 Loïc MARTIN
 *
 *  @author    Loïc MARTIN
 *  @copyright 2007-2020 Loïc MARTIN
 *
 * Don't forget to prefix your containers with your own identifier
 * to avoid any conflicts with others containers.
 */

function rssFeedDisplay(param) {
  var container = "#rssFeed__container";

  $.ajax(param, {
    accepts: {
      xml: "application/rss+xml",
    },
    dataType: "xml",
    success: function (data) {
      var i = 0;
      $(data)
        .find("item")
        .each(function () {
          if (i < 4) {
            var current_article = $(this);
            var news_thumbnail =
              '<div class="rssFeed__item" >' +
              '<div class="rssFeed__thumbnail">' +
              '<img class="lazyload" alt="Camera inspection - Image du blog" data-src="' +
              current_article.find("enclosure").attr("url") +
              '"></div>';
            var news_title =
              '<div class="rssFeed__content"><h3 class="title"><a href="' +
              current_article.find("link").text() +
              '" title="' +
              current_article.find("title").text() +
              '" target="_blank">' +
              current_article.find("title").text().substring(0, 40) +
              "...</a></h3>";
            var content = $(current_article.find("content\\:encoded").text())
              .text()
              .substring(0, 120);
            var news_snippet =
              '<p class="rssFeed_snippet">' + content + "...</p></div>";
            var entry =
              '<div class="col-xs-12 col-sm-6 col-md-3">' +
              news_thumbnail +
              news_title +
              news_snippet +
              "</div></div>";
            $(container).append(entry);
            i++;
          }
        });
    },
  });
}
