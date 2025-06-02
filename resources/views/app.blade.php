<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>LARAVEL + REACT</title>
    <link rel="icon"
        href="https://raw.githubusercontent.com/SAWARATSUKI/KawaiiLogos/refs/heads/main/Laravel/LaravelTransparent.png"
        type="image/png">
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Google+Sans:wght@400;700&display=swap" rel="stylesheet">
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        secondary: '#F9332A',
                    },
                     backgroundImage: {
        'text-gradient': 'linear-gradient(to right, #F9332A, #61DBFB)',
      },
                },
            },
            plugins: [
                function({
                    addBase,
                    theme
                }) {
                    addBase({
                        '::-webkit-scrollbar': {
                            width: '12px',
                        },
                        '::-webkit-scrollbar-track': {
                            background: '#1B222A',
                        },
                        '::-webkit-scrollbar-thumb': {
                            background: '#15181D',
                            borderRadius: '3px',
                        },
                        '::-webkit-scrollbar-corner': {
                            background: '#1B222A',
                        },
                    });
                },
            ],
        }
    </script>
    <style>
        * {
            font-family: 'Google Sans', sans-serif;
            font-weight: 700;
            color: white;
        }
    </style>
     @vite('resources/js/app.jsx')
</head>

<body class="font-sans text-gray-800  min-h-screen bg-[#1B222A]">
     <div id="app"></div>
</body>

</html>