const data = {
    name: 'root',
    toggled: true,
    active: false,
    children: [
        {
            name: 'parent',
            active: false,
            children: [
                { name: 'child1' },
                { name: 'child2' }
            ]
        },
        {
            name: 'loading parent',
            active: false,
            loading: true,
            children: []
        },
        {
            name: 'parent',
            active: false,
            children: [
                {
                    name: 'nested parent',
                    active: false,
                    children: [
                        { name: 'nested child 1' },
                        { name: 'nested child 2' }
                    ]
                }
            ]
        }
    ]
};

export default data;
