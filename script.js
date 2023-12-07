var container = document.querySelector('.container');

// 監聽滑鼠移入事件
container.addEventListener('mouseenter', function() {
  // 放大效果
  container.style.transform = 'scale(1.2)';
});

// 監聽滑鼠移出事件
container.addEventListener('mouseleave', function() {
  // 還原大小
  container.style.transform = 'scale(1)';
});
