import { wrap_a_ } from '@ctx-core/function';
export function case_insensitive_eql(a_unwrap) {
    var _a, _b, _c, _d;
    const value_a = wrap_a_(a_unwrap);
    let current_value = (_b = (_a = value_a[0]) === null || _a === void 0 ? void 0 : _a.toString()) === null || _b === void 0 ? void 0 : _b.toLowerCase();
    for (let i = 1; i < value_a.length; i++) {
        const value = (_d = (_c = value_a[i]) === null || _c === void 0 ? void 0 : _c.toString()) === null || _d === void 0 ? void 0 : _d.toLowerCase();
        if (current_value !== value)
            return false;
    }
    return true;
}
//# sourceMappingURL=src/case_insensitive_eql.js.map