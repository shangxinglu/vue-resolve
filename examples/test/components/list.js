
import Item from './item.js';
export default {
    name: 'list',
    props:{
        data:{
            type:Array,
            default:()=>[]
        }
    },
    template:`
        <div>
            <item v-for="(item,key) in data" :text="item" :key="key" />
        </div>
    `,
    components:{
        Item
    }
}