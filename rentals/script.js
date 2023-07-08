// window.addEventListener('DOMContentLoaded', function() {
//     var video = document.getElementById('houseVideo');
//     var container = document.getElementById('container');
    
//     // Adjust video dimensions based on container size
//     function resizeVideo() {
//       var aspectRatio = video.videoWidth / video.videoHeight;
//       var containerWidth = container.offsetWidth;
//       var containerHeight = container.offsetHeight;
      
//       if (containerWidth / containerHeight > aspectRatio) {
//         video.style.width = containerWidth + 'px';
//         video.style.height = (containerWidth / aspectRatio) + 'px';
//       } else {
//         video.style.width = (containerHeight * aspectRatio) + 'px';
//         video.style.height = containerHeight + 'px';
//       }
//     }
    
//     // Resize video when the window is resized
//     window.addEventListener('resize', resizeVideo);
    
//     // Initialize video dimensions
//     resizeVideo();
//   });
  