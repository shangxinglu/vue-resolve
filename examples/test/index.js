
// // eslint-disable-next-line no-undef
// new Vue({
//     el: '#app',
//     name:'app',
//     data:{
//         arr1:[9,9,9,9,9],
//         filter:{
//             name:'我是过滤器',
//         },
//     },
//     components:{
//         'test':{
//         props:['test'],

//             template:`
//             <div>

//                 <slot></slot>
//             </div>`
//         }
//     },
//     template:`
//     <div> 
//         <test >
//             <div>1111111</div>
//             <div>2222222</div>
//         </test>
//         <div v-for="(value,key) of arr1">{{key}}</div>
//         <div :name="filter.name">过滤器</div>
//         <div @click.once.sync="console.log($event)">点击</div>
//     </div>
//     `
// })

import List from './components/list.js'

// eslint-disable-next-line no-undef
new Vue({
    el: '#app',
    name:'app',
    data:{
       list:[
            '文章1',
            '文章2',
            '文章3',
            '文章4',
            '文章5',
            '文章6',
       ]
    },
    components:{
        List,
    },
    template:`
    <div :class="[bg?'bg__cyan':'bg__pink']"> 
       <list :data="list"></list>
    </div>
    `
})