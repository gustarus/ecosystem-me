import trianglesData from '@core/data/triangles.json'
import photo from '@core/images/me.jpg'

const me = {
  name: 'Kondratenko Pavel',
  role: 'Head of frontend development group',
  city: 'Moscow',
  email: 'aWFtQGtvbmRyYXRlbmtvLm1l',
  linkedin: 'https://ru.linkedin.com/in/kondratenkopa/en',
  twitter: 'https://twitter.com/mrgustarus'
};

export default {
  me,

  root: '#root',

  translate: {
    language: 'en',
    format: {
      date: 'DD.MM.YYYY',
      dateDay: 'MMMM D, YYYY',
      dateMonth: 'MMMM YYYY'
    }
  },

  infographic: {
    src: '//cloud.webulla.ru/me/infographic.png'
  },

  main: {
    plate: me,

    triangles: {
      matrix: trianglesData,
      item: {
        width: 40,
        height: 36,
        offset: 2
      },
      mash: {
        max: 10,
        offset: 5
      },
      animation: {
        showFor: 1500
      }
    },

    down: {
      threshold: {
        width: 1000,
        height: 650,
        scroll: 200
      }
    }
  },

  resume: {
    defaults: {
      summary: `
        <img src="${photo}"/>
        <p><strong>Hello! My name is Pavel, 25 years old. Currently I'm a head of frontend development group at <a href="https://rambler-co.ru/en" target="_blank">Rambler&amp;Co</a> and I love to create useful products.</strong></p>
        <p>I have many years of development experience – software, games, web sites, crm systems and etc. Also, I have extensive knowledge about all development processes: preparation of technical specifications, drawing illustrations, development of databases architecture, implementation of rest api and many others.</p>`,

      experience: [
        {
          period: ['01.02.2017', null],
          company: 'Rambler&Co',
          description: 'Moscow, <a href="//rambler-co.ru" target="_blank">rambler-co.ru</a>',
          specialization: 'Lead frontend developer (head of group)',
          content: `
            <p>Lead frontend role. I organized projects launching, teams processes, frontend meetups and so on.
            Also I'm in charge of js code and architecture building.
            Currently there are 9 good frontend developers (seniors, middles and junior) in my team.</p>
            <ul data-label="General results">
              <li>We've launched Rambler/Library ecosystem: <strong>react-native</strong> for mobile application (android & ios) and sails.js as backend (the application is fully developed by me).</li>
              <li>We've launched the isomorphic app <a href="https://autorambler.ru/" target="_blank">https://autorambler.ru</a> on the <a href="https://www.npmjs.com/package/rship" target="_blank">rship</a> with react.js and server side rendering.</li>
              <li>We've launched the isomorphic app <a href="https://www.passion.ru/" target="_blank">https://www.passion.ru</a> on the <a href="https://www.npmjs.com/package/rship" target="_blank">rship</a> with react.js and server side rendering.</li>
            </ul>`
        },
        {
          period: ['01.07.2016', '31.01.2017'],
          company: 'Rambler&Co',
          description: 'Moscow, <a href="//rambler-co.ru" target="_blank">rambler-co.ru</a>',
          specialization: 'Senior frontend developer on highly loaded projects',
          content: `
            <p>Lead frontend role in the <a href="https://lenta.ru" target="_blank">https://lenta.ru</a> project team. I help junior developers and organize meetups with the colleague.</p>
            <ul data-label="General results">
              <li>I've spoken at <a href="http://holyjs.ru/en/#schedule" target="_blank">HolyJS conference</a> in Moscow on one stage with foreign speakers.</li>
              <li>I taught three junior developers.</li>
              <li>I've created mobile application (react-native) for library in our company.</li>
              <li>I've created real time testing platform with react and ruby on rails as api for frontend developers school exam in our company.</li>
              <li>I took charge of organization of meetups for frontend developers - <a href="http://rdsfrontend.webulla.ru/" target="_blank">RDSFront&</a>.</li>
              <li>I've created mediator template components architecture at <a href="https://lenta.ru" target="_blank">https://lenta.ru</a>.</li>
              <li>I've completed "Web optimization" course by Google and optimized our <a href="https://lenta.ru" target="_blank">https://lenta.ru</a>.</li>
              <li>I replaced png sprite with svg sprite on the <a href="https://lenta.ru" target="_blank">https://lenta.ru</a> project. It was in the context of the interface improving.</li>
              <li>I implemented jsdoc in our project for more developer friendly code.</li>
              <li>I've completed English language (Intermediate level) course and I need practice ;).</li>
            </ul>`
        }, {
          period: ['01.09.2015', '30.06.2016'],
          company: 'Rambler&Co',
          description: 'Moscow, <a href="//rambler-co.ru" target="_blank">rambler-co.ru</a>',
          specialization: 'Frontend developer on highly loaded projects',
          content: `
            <p>I developed new and supported old functionality of the highly loaded project <a href="https://lenta.ru" target="_blank">https://lenta.ru</a> (it’s about 2 000 000 visitors every day). Also, I took part in the other project of the Rambler&Co holding: <a href="http://motor.ru/" target="_blank">http://motor.ru/</a>, <a href="http://moslenta.ru/" target="_blank">http://moslenta.ru/</a>, <a href="https://you.rambler-co.ru/" target="_blank">https://you.rambler-co.ru/</a>.</p>
            <ul data-label="General results">
              <li>I studied many technologies and methodologies which were new for me.</li>
              <li>I was as mentor for three junior developers.</li>
              <li>I developed regression testing functionality for the <a href="https://lenta.ru" target="_blank">https://lenta.ru</a> project. This feature reduces the chance of errors when we improved old functionality.</li>
              <li>I developed online text translations module for the <a href="https://lenta.ru" target="_blank">https://lenta.ru</a>. I used faye and web sockets. It helps us to create dynamically refreshable translations. Like this one: <a href="https://lenta.ru/onlines/2016/06/20/russiawales/" target="_blank">https://lenta.ru/onlines/2016/06/20/russiawales/</a>.</li>
              <li>I’ve published article in the <a href="https://habrahabr.ru" target="_blank">https://habrahabr.ru</a> and spoke at the company meetup (RamblerJS).</li>
            </ul>
            <p><small>Used skills: kanban, regression and unit testing, casperjs, phantomjs, karmajs, faye, web sockets, git, gitlab, jiira, java script, reactjs, coffee script, erb in coffee script with rails, npm, babel, es6, gulp, webpack, sketch, sass, stylus, html 5, css 3, ruby on rails as backend, nginx.</small></p>`
        }, {
          period: ['01.04.2014', '01.07.2015'],
          company: 'Itella Connexions LLC',
          description: 'Moscow, <a href="//www.itella.ru/english/aboutitella/itella-connexions/" target="_blank">itella.ru</a>',
          specialization: 'Full stack crm developer (yii2, php5, javascript, mysql)',
          content: `
            <p>I developed and was supporting crm systems (web-platforms) with specific functionality for Audi, KIA, Philip Morris and Pernod Ricard Rouss. These crm systems help to collect contacts at events. Team work.</p>
            <ul data-label="General results">
              <li>I developed new crm system for contacts collection for Pernod Ricard Rouss. In this project I developed an architecture of a database, web interface of the system, rest api with basic http auth for ios app and e.t.c. The yii2 framework (php) was used. Alos mysql database, javascript and bootstrap framework was used.</li>
              <li>I developed a platform and a web form with offline mode for KIA Motors. Yii2 framework and rest api were used. Also I used backbone.js.</li>
              <li>I took part in developing of the crm for Audi. Also I improved the crm for Moscow Automobile Salon.</li>
              <li>I made up about ten cross browser and cross platform emails for Audi newsletters.</li>
              <li>I developed rest api module. This module was used for contacts collection via mobile apps. In this module I used basic http auth + token auth and users management.</li>
            </ul>
            <p><small>Used skills: basecamp, php 5, yii1, yii 2, mysql, mysql workbench, gitlab, rest api, soap, backbone.js, underscore.js, require.js, html 5, css 3.</small></p>`
        }, {
          period: ['01.04.2013', '01.01.2014'],
          company: 'Kodix',
          description: 'Moscow, <a href="//kodix.ru/" target="_blank">kodix.ru</a>',
          specialization: 'Full stack web developer (1c-bitrix: php, mysql, javascript)',
          content: `
            <p>I developed and was supporting company sites and on-line shops. This sites were created with 1C-Bitrix “Site management”. I finished the course “Bitrix framework developer”.</p>
            <ul data-label="General results">
              <li>I developed “Svoe mnenie” company site (<a href="http://www.svoemnenie.com/" target="_blank">http://www.svoemnenie.com/</a>). I used 1C-Bitrix framework.</li>
              <li>I developed online payment module for the fott online-shop (<a href="http://shop.fott.ru/" target="_blank">http://shop.fott.ru/</a>).</li>
              <li>I supported several projects which was developed with 1C-Bitrix.</li>
            </ul>
            <p><small>Used skills: basecamp, php 5, yii1, yii 2, mysql, mysql workbench, gitlab, rest api, soap, backbone.js, underscore.js, require.js, html 5, css 3.</small></p>`
        }, {
          period: ['01.03.2012', '01.10.2012'],
          company: 'Metko, Internet Agency',
          description: 'Moscow, <a href="//www.metko.ru/" target="_blank">metko.ru</a>',
          specialization: 'Full stack web developer (wordpress, joomla, umi cms)',
          content: `
            <p>I developed web sites and online-shops with Vam Shop, Joomla, Wordpress, UMI CMS. Also I was supporting sites for seo-optimization.</p>
            <ul data-label="General results">
              <li>I developed the online-shop with parts for auto. I used Vam Shop with parser of a another online-shop.</li>
              <li>I was supporting web-sites created with Wordpress and Joomla.</li>
              <li>I optimized several web-sites for search engines.</li>
              <li>I developed web-site created with UMI CMS.</li>
            </ul>
            <p><small>Used skills: php, java script, mysql, umi cms, joomla, wordpress.</small></p>`
        }, {
          period: ['01.07.2011', '01.01.2012'],
          company: 'Flant',
          description: 'Moscow, <a href="//flant.ru/" target="_blank">flant.ru</a>',
          specialization: 'Symfony framework junior developer',
          content: `
            <p>I improved functional of the crm system created with Symfony framework.</p>
            <ul data-label="General results">
              <li>I improved the module which helps to create orders.</li>
            </ul>
            <p><small>Used skills: php, mysql, symphony framework.</small></p>`
        }, {
          period: ['01.01.2011', '01.06.2011'],
          company: 'Moscow Institute of Electronics and Mathematics',
          description: 'Moscow, <a href="//miem.hse.ru/en/" target="_blank">miem.hse.ru</a>',
          specialization: 'Zend framework junior developer',
          content: `
            <p>I improved the web-platform created with Zend Framework for teachers. It was in the university.</p>
            <ul data-label="General results">
              <li>I developed publications module.</li>
              <li>I improved personal cabinet functional.</li>
            </ul>
            <p><small>Used skills: php, mysql, java script, zend framework.</small></p>`
        }, {
          period: ['01.01.2009', '01.12.2010'],
          company: 'Eliss',
          description: 'Moscow, <a href="//miem.hse.ru/en/" target="_blank">miem.hse.ru</a>',
          specialization: 'Junior web developer, practice',
          content: `
            <p>I improved the company web-site. I developed flash presentation which contains information about the company. My first official working place.</p>
            <ul data-label="General results">
              <li>I developed flash presentation. I used 3d models.</li>
              <li>I learned basic зossibilities of the action script.</li>
            </ul>
            <p><small>Used skills: php, mysql, java script, zend framework.</small></p>`
        }
      ],

      education: [
        {
          label: 'Higher, 2009 - 2014',
          name: 'Moscow Institute of Electronics and Mathematics',
          description: 'Department of The National Research University Higher School of Economics<br/>Moscow, <a href="//miem.hse.ru/en/" target="_blank">miem.hse.ru</a>',
          specialization: 'Information Technologies, Applied Informatics'
        }
      ],

      courses: [
        {
          date: ['06.09.2016', '12.09.2016'],
          title: 'Website Performance Optimization',
          url: 'https://www.udacity.com/course/website-performance-optimization--ud884',
          description: 'By Google, Udacity, online'
        },
        {
          date: ['01.05.2016', '31.07.2016'],
          title: 'English language B1 (Intermediate)',
          url: '//cloud.webulla.ru/me/certificates/English language B1 (Intermediate).pdf',
          description: 'Face2Face methodology, International House, Moscow-BKC'
        },
        {
          date: ['01.09.2013', '31.10.2013'],
          title: '1C-Bitrix Framework Developer',
          url: '//cloud.webulla.ru/me/certificates/Bitrix Framework Developer.pdf',
          description: 'Bitrix'
        }
      ],

      skills: {
        tags: {
          'interface design': null,
          'frontend development': null,
          'backend development': null,
          'server administration': null,
          'architecture design': null,
          'team leading': null,
          'developers teaching': null,
          'team working': null
        },

        languages: {
          English: 'intermediate',
          Russian: 'native'
        }
      },

      publications: [
        {
          date: '06.11.2015',
          url: 'http://habrahabr.ru/post/269673/',
          title: 'My experience with the gulp.js',
          description: 'Gulp js: production configuration, live reload server and errors handler<br>Habrahabr, java script section'
        },
        {
          date: '16.08.2015',
          url: 'http://habrahabr.ru/post/264969/',
          title: 'My experience with the yii 2 configuration',
          description: 'Habrahabr, php section'
        }
      ],

      speeches: [
        {
          date: '11.12.2016',
          url: '/speeches/holyjs',
          title: 'The web is mutating',
          description: 'HolyJS, Frontend developers conference'
        },
        {
          date: '25.08.2016',
          url: '/speeches/moscowjs',
          title: 'How we\'ve integrated regression testing',
          description: 'MoscowJS, Frontend developers meetup'
        },
        {
          date: '02.08.2016',
          title: 'About regression testing at the lenta.ru',
          description: 'RDSFront&, Company meetup'
        },
        {
          date: '22.06.2016',
          title: 'Code documentation with jsdoc at the lenta.ru',
          description: 'RamblerJS, Company meetup'
        },
        {
          date: '21.04.2016',
          title: 'How we use web sockets in lenta.ru text translations',
          description: 'RamblerJS, Company meetup'
        },
        {
          date: '26.04.2013',
          url: '/speeches/canvas',
          title: 'Introduction to the HTML5 Canvas',
          description: 'Lecture, Moscow Institute of Electronics and Mathematics'
        },
        {
          date: '14.11.2011',
          url: '/speeches/database',
          title: 'Database indexes - what it is and how to use it',
          description: 'Lecture, Moscow Institute of Electronics and Mathematics'
        }
      ],

      links: [
        {
          title: 'LinkedIn',
          url: me.linkedin
        },
        {
          title: 'Twitter',
          url: me.twitter
        },
        {
          title: 'Webulla project (my)',
          url: 'http://webulla.ru/'
        },
        {
          title: 'GitHub',
          url: 'https://github.com/gustarus?tab=repositories'
        },
        {
          title: 'NPM',
          url: 'https://www.npmjs.com/~gustarus'
        },
        {
          title: 'Packagist',
          url: 'https://packagist.org/search/?q=webulla'
        }
      ],

      activities: [
        {
          date: ['01.02.2017', null],
          url: 'https://rambler-co.ru/en',
          title: 'Head of frontend development group',
          description: 'Technical leader of the four teams at Rambler&Co'
        }, {
          date: ['01.07.2016', null],
          url: 'http://rdsfrontend.webulla.ru',
          title: 'RDSFront&meetups organizer',
          description: 'Co-founder. Rambler&Co frontend meetups'
        }, {
          date: ['26.12.2014', null],
          url: 'http://webulla.ru/',
          title: 'Webulla brand factory',
          description: 'Founder. My own pocket brand'
        }
      ]
    },

    booking: {
      target: {
        label: 'The second half of 2016',
        company: 'Booking.com',
        description: 'Amsterdam, <a href="https://workingatbooking.com/" target="_blank">workingatbooking.com</a>',
        specialization: 'Senior frontend developer'
      }
    }
  },

  speeches: {
    holyjs: {
      date: '11.12.2016',
      title: 'The web is mutating',
      description: '<a href="http://holyjs.ru/en/" target="_blank">HolyJS</a>, Moscow, Radisson Slavyanskaya Hotel',
      summary: `In my speech I told about the web mutation on <a href="https://lenta.ru" target="_blank">lenta.ru</a> example. Nowadays the web isn't just web site. Every day web resources are becoming something more. They can look like native application, save a state, remind about changes,  know about your location and work without the internet.
      <br/><br/>I showed how we've used service worker for offline mode, progressive web app for devices, amp for google search and web sockets for text broadcasts.
      <div class="widget"><div class="widget__content"><blockquote class="twitter-tweet" data-lang="ru"><p lang="en" dir="ltr">Fullhouse at <a href="https://twitter.com/hashtag/holyjs?src=hash">#holyjs</a> track with <a href="https://twitter.com/mrgustarus">@mrgustarus</a> about Web mutation <a href="https://t.co/kUAgKwlqKk">pic.twitter.com/kUAgKwlqKk</a></p>&mdash; HolyJS (@HolyJSconf) <a href="https://twitter.com/HolyJSconf/status/807867739012530176">11 декабря 2016 г.</a></blockquote></div></div>`,

      links: [
        {
          title: '<strong>Presentation</strong><br/>russian, pdf, static',
          url: '//cloud.webulla.ru/me/speeches/holyjs/The web is mutating.pdf'
        },
        {
          title: '<strong>Presentation</strong><br/>russian, keynote, with video',
          url: '//cloud.webulla.ru/me/speeches/holyjs/The web is mutating.key'
        },
        {
          title: '<strong>Presentation</strong><br/>russian, power point, with video',
          url: '//cloud.webulla.ru/me/speeches/holyjs/The web is mutating.pptx'
        },
        {
          title: '<strong>Presenter notes</strong><br/>russian, pdf',
          url: '//cloud.webulla.ru/me/speeches/holyjs/The web is mutating - Presenter notes.pdf'
        },
        {
          title: 'Announce on the conference website',
          url: 'http://holyjs.ru/en/talks/the-web-is-mutating/'
        },

        {
          title: 'Push notifications',
          links: [
            {
              title: '<strong>Introduction guide</strong><br/>By google',
              url: 'https://developers.google.com/web/fundamentals/engage-and-retain/push-notifications/'
            },
            {
              title: 'Pushwoosh notifications',
              url: 'https://github.com/Pushwoosh/web-push-notifications'
            }
          ]
        },

        {
          title: 'Web sockets',
          links: [
            {
              title: '<strong>Introduction guide</strong><br/>Web sockets tutorial',
              url: 'https://www.html5rocks.com/en/tutorials/websockets/basics/'
            },
            {
              title: 'Faye',
              url: 'https://faye.jcoglan.com/'
            }
          ]
        },

        {
          title: 'Critical rendering path',
          links: [
            {
              title: '<strong>Introduction guide</strong><br/>Critical rendering path',
              url: 'https://developers.google.com/web/fundamentals/performance/critical-rendering-path/'
            },
            {
              title: 'Website Performance Optimization course',
              url: 'https://www.udacity.com/course/website-performance-optimization--ud884'
            }
          ]
        },

        {
          title: 'Accelerated mobile pages',
          links: [
            {
              title: '<strong>Introduction guide</strong><br/>Create your first amp page',
              url: 'https://www.ampproject.org/docs/get_started/create'
            },
            {
              title: 'AMP Project',
              url: 'https://www.ampproject.org/'
            },
            {
              title: 'Try AMP demo',
              url: 'https://g.co/AMPdemo'
            },
            {
              title: 'Mobile Usage Statistics',
              url: 'http://blog.ezoic.com/mobile-usage-statistics-key-facts-and-findings-for-publishers/'
            },
            {
              title: 'Global traffic report from comScore',
              url: 'https://techcrunch.com/2014/08/21/majority-of-digital-media-consumption-now-takes-place-in-mobile-apps/'
            }
          ]
        },

        {
          title: 'Service workers',
          links: [
            {
              title: '<strong>Introduction guide</strong><br/>Service worker tutorial',
              url: 'https://developers.google.com/web/fundamentals/getting-started/primers/service-workers'
            }
          ]
        },

        {
          title: 'Web app manifest',
          links: [
            {
              title: '<strong>Introduction guide</strong><br/>Web app manifest',
              url: 'https://developers.google.com/web/fundamentals/engage-and-retain/web-app-manifest/'
            },
            {
              title: 'Progressive web app',
              url: 'https://developers.google.com/web/progressive-web-apps/'
            },
            {
              title: 'Firebase Cloud Messaging Client App',
              url: 'https://firebase.google.com/docs/cloud-messaging/js/client'
            },
            {
              title: 'React pwa generator',
              url: 'https://github.com/jeffposnick/create-react-pwa'
            }
          ]
        },

        {
          title: 'Conclusion',
          links: [
            {
              title: 'How it feels to learn JavaScript in 2016',
              url: 'https://hackernoon.com/how-it-feels-to-learn-javascript-in-2016-d3a717dd577f#.k2rri7noe'
            }
          ]
        }
      ]
    },

    moscowjs: {
      date: '25.08.2016',
      title: 'The speech about regression testing at the <a href="https://lenta.ru" target="_blank">lenta.ru</a>',
      description: 'On the <a href="http://moscowjs.ru/" target="_blank">MoscowJS</a> in the <a href="http://rambler-co.ru/" target="_blank">Rambler&Co</a>',
      summary: '<div class="widget"><div class="widget__content"><blockquote class="twitter-tweet" data-lang="ru"><p lang="ru" dir="ltr">Продолжаем. Сейчас будет доклад о «Регрессионном тестировании компонентов верстки» от Павла Кондратенко, Rambler&amp;Co <a href="https://t.co/XFyKAEwIRF">pic.twitter.com/XFyKAEwIRF</a></p>&mdash; MoscowJS (@moscowjs) <a href="https://twitter.com/moscowjs/status/768864246952230916">25 августа 2016 г.</a></blockquote></div></div>',

      links: [
        {
          title: 'The video',
          url: 'https://youtu.be/aftKkyfjKK4'
        },
        {
          title: 'The presentation',
          url: '//cloud.webulla.ru/me/speeches/moscowjs/The speech about regression testing at the lenta.pdf'
        },
        {
          title: 'The presenter notes',
          url: '//cloud.webulla.ru/me/speeches/moscowjs/The speech about regression testing at the lenta - Presenter notes.pdf'
        },
        {
          title: 'BackstopJS',
          url: 'https://github.com/garris/BackstopJS'
        },
        {
          title: 'PhantomJS',
          url: 'http://phantomjs.org/'
        },
        {
          title: 'CasperJS',
          url: 'http://casperjs.org/'
        },
        {
          title: 'Slack - send message api',
          url: 'https://api.slack.com/incoming-webhooks#sending_messages'
        }
      ]
    },

    canvas: {
      date: '26.04.2013',
      title: 'The lecture about HTML5 Canvas',
      description: 'As part of "Programming technology" course in the university',

      links: [
        {
          title: 'The presentation',
          url: '//cloud.webulla.ru/me/speeches/canvas/Lecture about HTML5 Canvas - Presentation.pdf'
        },
        {
          title: 'The presentation guide',
          url: '//cloud.webulla.ru/me/speeches/canvas/Lecture about HTML5 Canvas - Presentation guide.pdf'
        },
        {
          title: 'Documentation',
          url: 'http://www.w3schools.com/html/html5_canvas.asp'
        }
      ]
    },

    database: {
      date: '14.11.2011',
      title: 'The lecture about database indexes',
      description: 'As part of "Databases" course in the university',

      links: [
        {
          title: 'The presentation',
          url: '//cloud.webulla.ru/me/speeches/database/Database indexes - Presentation.pdf'
        },
        {
          title: 'The lesson guide',
          url: '//cloud.webulla.ru/me/speeches/database/Database indexes - Lesson guide.pdf'
        },
        {
          title: 'MySql indexes documentation',
          url: 'http://dev.mysql.com/doc/refman/5.7/en/mysql-indexes.html'
        }
      ]
    }
  }
}
