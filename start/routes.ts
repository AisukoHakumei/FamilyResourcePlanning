/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'


router.get('/login', (ctx) => {
    return ctx.inertia.render('login')
})

// Behind auth group
router.group(() => {
    router.on('/').renderInertia('home')

    router.get('/budget', (ctx) => {
        return ctx.inertia.render('budget')
    })

    router.get('/projects', (ctx) => {
        return ctx.inertia.render('projects')
    })

    router.get('/tasks', (ctx) => {
        return ctx.inertia.render('tasks')
    })

    router.get('/knowledgebase', (ctx) => {
        return ctx.inertia.render('knowledgebase')
    })
})