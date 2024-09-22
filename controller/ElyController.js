let items = [];

exports.getItems = (req, res) => {
    res.json(items);
};

exports.getItem = (req, res) => {
    const item = items.find(i => i.id === parseInt(req.params.id));
    if (item) {
        res.json(item);
    } else {
        res.status(404).send('Item not found');
    }
};

exports.createItem = (req, res) => {
    const newItem = {
        id: items.length + 1,
        name: req.body.name,
    };
    items.push(newItem);
    res.status(201).json(newItem);
};

exports.updateItem = (req, res) => {
    const item = items.find(i => i.id === parseInt(req.params.id));
    if (item) {
        item.name = req.body.name;
        res.json(item);
    } else {
        res.status(404).send('Item not found');
    }
};

exports.deleteItem = (req, res) => {
    items = items.filter(i => i.id !== parseInt(req.params.id));
    res.status(204).send();
};
