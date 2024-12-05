import { Routes } from '@angular/router';
import { Home00015662Component } from './components_00015662/home-00015662/home-00015662.component';
import { Details00015662Component } from './components_00015662/details-00015662/details-00015662.component';
import { Delete00015662Component } from './components_00015662/delete-00015662/delete-00015662.component';
import { Edit00015662Component } from './components_00015662/edit-00015662/edit-00015662.component';
import { Create00015662Component } from './components_00015662/create-00015662/create-00015662.component';
import { EditTopic00015662Component } from './components_00015662/edit-topic-00015662/edit-topic-00015662.component';
import { DetailsTopic00015662Component } from './components_00015662/details-topic-00015662/details-topic-00015662.component';
import { DeleteTopic00015662Component } from './components_00015662/delete-topic-00015662/delete-topic-00015662.component';
import { CreateTopic00015662Component } from './components_00015662/create-topic-00015662/create-topic-00015662.component';

export const routes: Routes = [
    {
        path:"",
        component: Home00015662Component
    },
    {
        path:"home",
        component: Home00015662Component
    },
    {
        path:"edit/:id",
        component: Edit00015662Component
    },
    {
        path:"details/:id",
        component: Details00015662Component
    },
    {
        path:"delete/:id",
        component: Delete00015662Component
    },
    {
        path:"create",
        component: Create00015662Component
    },
    {
        path:"edittopic/:id",
        component: EditTopic00015662Component
    },
    {
        path:"detailstopic/:id",
        component: DetailsTopic00015662Component
    },
    {
        path:"deletetopic/:id",
        component: DeleteTopic00015662Component
    },
    {
        path:"createtopic",
        component: CreateTopic00015662Component
    }
];
