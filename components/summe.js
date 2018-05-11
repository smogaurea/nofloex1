const noflo = require('noflo');
exports.getComponent = () => {
    const c = new noflo.Component();
    c.description = 'sum up two number';
    c.icon = 'file';
    c.inPorts.add('x',{
        datatype:'number'
    });
    c.inPorts.add('y',{
        datatype:'number'
    });
    c.outPorts.add('out', {
        datatype: 'string'
    });
    c.outPorts.add('error', {
        datatype: 'object'
    });

    c.process((input,output) => {
        console.log(input.getData('x'),input.getData('y'));
        
        // let x = Number(input.getData('x'));
        // let y = Number(input.getData('y'));
        output.send({
            out:'x + y'
        })
        output.done();
    });
    return c;
}