import axios from 'axios';
import Vue from 'vue'
import {web} from '../data.js'
import config from '../config'


function request (type,data){
    if(data.www){
        var requestUrl = config.wwwUrl + data.url;
    }else{
        console.log(web.current.path);
        var requestUrl = config.baseUrl(data.url);
    }
    return new Promise(function(resolve,reject){
        Vue.http[type](requestUrl, data.body).then(response => {
            resolve(response.data.data)
        },err => {
            console.error('网络请求错误:')
            console.log(err)
        })
    })
}
export function postRequest(data){
    return request('post',data)
}
export function getRequest(data){
    return request('get',data)
}

let base = '';


export const webList = params => { return axios.get(`${base}/web/list`, { params: params }); };

export const requestLogin = params => { return axios.post(`${base}/login`, params).then(res => res.data); };

export const getUserList = params => { return axios.get(`${base}/user/list`, { params: params }); };

export const getUserListPage = params => { return axios.get(`${base}/user/listpage`, { params: params }); };

export const removeUser = params => { return axios.get(`${base}/user/remove`, { params: params }); };

export const batchRemoveUser = params => { return axios.get(`${base}/user/batchremove`, { params: params }); };

export const editUser = params => { return axios.get(`${base}/user/edit`, { params: params }); };

export const addUser = params => { return axios.get(`${base}/user/add`, { params: params }); };

