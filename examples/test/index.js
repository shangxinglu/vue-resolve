

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
       ],
       cond:true,
    },
    components:{
        List,
    },
    template:`
    <div :class="[bg?'bg__cyan':'bg__pink']"> 
        <div v-if="cond">
            123
        </div>
       <list :data="list"></list>
    </div>
    `
})