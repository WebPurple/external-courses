function bind(func, context, ...param) {
    return function (...args) {
        context['polybind'] = func;
        let resultFunction = context['polybind'](...param.concat(args));
        delete context['polybind'];
        return resultFunction;
    }
}