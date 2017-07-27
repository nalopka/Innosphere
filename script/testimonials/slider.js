$(document).ready(function(){
  var $sliderSmall = $(".slider-small")
  var sliderSmallLimit = $sliderSmall.width() - $('.slider').width(); // Определяем крайнюю левую позицию слайдера
  
  var moveSlider = function(direction) {
    var left = $sliderSmall.position().left; // Текущая позиция слайдера
    var directionValue = direction == 'right' ? -1 : 1; // Переводим словесное направление в множитель
    var newLeft = left + 300 * directionValue; // Новая позиция слайдера
    if (newLeft > 0) {newLeft = 0;} // Проверяем, не слишком ли далеко слайдер ушёл вправо
    if (newLeft < -sliderSmallLimit) {newLeft = -sliderSmallLimit;} // ... или влево
    $sliderSmall.css("left", newLeft); // обновляем позицию слайдера
  }
  
  $(".move-slider").click(function(){
    var direction = $(this).attr('data-direction'); // Направление берётся из data-атрибута
    moveSlider(direction); // Обновляем позицию слайдера. 
  });
});