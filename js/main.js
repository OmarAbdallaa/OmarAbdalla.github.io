(function() {
    'use strict';
    init();

    function init() {
        smoothScroll.init();

        var wow = new WOW({mobile: false});
        wow.init();

        tagsGenerator();
    }

    function tagsGenerator() {
        var skillsJavascript = ['Javascript', 'Nodejs', 'jquery', 'Grunt', 'Gulp',  'Chrome Extensions',  'Ionic 2/3', 'Typescript',  'Reactjs', 'Redux'],
            skillsPhp = ['PHP', 'Laravel', 'phpUnit', 'composer', 'poo', 'Maven', 'Java', 'MySQL', 'mongodb', 'Rest services'],
            skillsOthers = ['HTML5', 'CSS3', 'sass', 'git', 'Heroku', 'Bitbucket', 'Jenkins', 'Agile methodology', 'Responsive design', 'WebPack'],
            colors = ['btn-info', 'btn-success', 'btn-danger', 'btn-primary', 'btn-warning'],
            i = 0;

        $.each(skillsJavascript, function(key, value) {
            if (i === 5) {
                i = 0;
            }
            $('.tags.skills-1').append('<div class="tag label  ' + colors[i] + ' lg"><span>' + value + '</span></div>')
            i++;
        });
        $.each(skillsPhp, function(key, value) {
            if (i === 5) {
                i = 0;
            }
            $('.tags.skills-2').append('<div class="tag label  ' + colors[i] + ' lg"><span>' + value + '</span></div>')
            i++;
        });
        $.each(skillsOthers, function(key, value) {
            if (i === 5) {
                i = 0;
            }
            $('.tags.skills-3').append('<div class="tag label  ' + colors[i] + ' lg"><span>' + value + '</span></div>')
            i++;
        });
    }
})();
