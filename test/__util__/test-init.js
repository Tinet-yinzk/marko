require("./patch-module");
require("complain").log = function(message) {
    if (process.env.COMPLAIN_THROWS) {
        throw new Error(message);
    }
};
require("../../node-require").install({
    compilerOptions: { writeToDisk: false }
});
require("it-fails");
