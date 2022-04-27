
<html lang="en">
<head>
    <link rel="stylesheet" href="/css/styles.css" />
    <script>
      document.addEventListener('DOMContentLoaded', function () {
          document.querySelector('footer').style.backgroundColor = 'purple'
      });
    </script>
</head>
</html>

/**So when would you want to use this technique? Well,
 * JavaScript code in the <head> will run before JavaScript code in the <body>,
 *  so if you do have JavaScript code that needs to run as soon as possible,
 *  then you could put that code in the <head> and wrap it in a DOMContentLoaded event listener.
 * This way it will run as early as possible, but not too early that the DOM isn't ready for it. */