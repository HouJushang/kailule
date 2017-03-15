/**
 * Created by hou on 2017/3/15.
 */
import {web} from './data.js'

export default {
    wwwUrl: 'http://kll.kll.com:3000/',
    baseUrl: function(path){
        return `http://${web.current.path}.kll.com:3000/${path}`
    }
}