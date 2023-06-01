//ここのサイトの機能をjquery化して使用。=> https://x.gd/Crkkt
$(document).ready(function () {
  setupDes();

  $("textarea:not(.nodes)")
    .on("focus", function () {
      offDes($(this));
    })
    .on("blur", function () {
      onDes($(this));
    });

  $("input:not(.nodes)[type='text'], input:not(.nodes)[type='']")
    .on("focus", function () {
      offDes($(this));
    })
    .on("blur", function () {
      onDes($(this));
    });
});

function setupDes() {
  // 種付け作業
  $("textarea").each(function () {
    if (!$(this).hasClass("nodes")) {
      if ($(this).val() == this.defaultValue) {
        $(this).addClass("ondes");
      }
      $(this)
        .on("focus", function () {
          offDes($(this));
        })
        .on("blur", function () {
          onDes($(this));
        });
    }
  });

  $("input[type='text'], input[type='']").each(function () {
    if (!$(this).hasClass("nodes") && ($(this).val() == this.defaultValue || $(this).val() == "")) {
      $(this).addClass("ondes");
    }
    $(this)
      .on("focus", function () {
        offDes($(this));
      })
      .on("blur", function () {
        onDes($(this));
      });
  });
}

function offDes(from) {
  if (!from.hasClass("ondes")) {
    return 0;
  }
  from.removeClass("ondes");
  from.val("");
  return 1;
}

function onDes(from) {
  if (from.val() !== "") {
    return 0;
  }
  from.addClass("ondes");
  from.val(from.prop("defaultValue"));
  return 1;
}
