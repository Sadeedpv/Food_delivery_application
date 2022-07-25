export default{
    name: 'food',
    title: 'Food',
    type: 'document',
    fields: [
        {
            name:'image',
            title:'Image',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name:'name',
            title:'Name',
            type: 'string',
        },
        {
            name:'description',
            title:'Description',
            type: 'text'
        },
        {
            name:'slug',
            title:'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 96
            }
        },
        {
            name:'price',
            title:'Price',
            type: 'number'
        }
    ]
}