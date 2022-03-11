export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '622b6b4358d1ae1cc7c95edf',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-fxo1gv8t',
                  apiId: 'bacd66e3-6ba9-4d62-8b8f-dd41af1edb94'
                },
                {
                  buildHookId: '622b6b43b6b7bf183133e220',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-utedzin2',
                  apiId: '5d2d1ddc-ee99-477f-9ac6-adb0cea057ea'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kinfield/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-utedzin2.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
