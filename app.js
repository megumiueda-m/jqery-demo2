$(function () {
  const stages = ["🌱", "🌿", "🌳"];
  let current = 0;

  $('#grow-btn').on('click', function () {
    if (current < stages.length - 1) {
      current++;
      $('#tree').fadeOut(200, function () {
        $(this).text(stages[current]).fadeIn(200);
      });
    } else {
      $('#message').hide().text("🌳 木が育ちきりました！おめでとう！🎉").fadeIn(300);
      $('#grow-btn').prop("disabled", true).text("完成！");
      $('#reset-btn').fadeIn(); // ← ここで再スタートボタン表示
    }
  });

  $('#reset-btn').on('click', function () {
    current = 0;
    $('#tree').fadeOut(200, function () {
      $(this).text(stages[current]).fadeIn(200);
    });
    $('#message').fadeOut(200, function () {
      $(this).text('');
    });
    $('#grow-btn').prop("disabled", false).text("育てる");
    $('#reset-btn').fadeOut();
  });
});