export default {
    name: 'item',
    props: {
        text: {
            type:String,
            default: '',
        }
    },
    template: `
        <div>{{text}}</div>
    `
}