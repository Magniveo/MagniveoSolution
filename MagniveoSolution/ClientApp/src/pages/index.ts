import React from "react";
export default {
    actionlog: {
        name: 'Логи',
        path: '/actionlog',
        controller: 'WalkingTec.Mvvm.Admin.Api,ActionLog',
        component: React.lazy(() => import('./actionlog'))
    },
    frameworkgroup: {
        name: 'Управление правами пользователей',
        path: '/frameworkgroup',
        controller: 'WalkingTec.Mvvm.Admin.Api,FrameworkGroup',
        component: React.lazy(() => import('./frameworkgroup'))
    },
    frameworkrole: {
        name: 'Редактирование прав',
        path: '/frameworkrole',
        controller: 'WalkingTec.Mvvm.Admin.Api,FrameworkRole',
        component: React.lazy(() => import('./frameworkrole'))
    },
    frameworkuserbase: {
        name: 'Управление пользователями',
        path: '/frameworkuser',
        controller: 'WalkingTec.Mvvm.Admin.Api,FrameworkUser',
        component: React.lazy(() => import('./frameworkuser'))
    },
    frameworkmenu: {
        name: 'Меню',
        path: '/frameworkmenu',
        controller: 'WalkingTec.Mvvm.Admin.Api,FrameworkMenu',
        component: React.lazy(() => import('./frameworkmenu'))
    },
    dataprivilege: {
        name: 'Разрешения',
        path: '/dataprivilege',
        controller: 'WalkingTec.Mvvm.Admin.Api,DataPrivilege',
        component: React.lazy(() => import('./dataprivilege'))
    }
    /**WTM**/
}
