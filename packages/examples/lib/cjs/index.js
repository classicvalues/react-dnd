"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var final_result_1 = __importDefault(require("./00-chessboard/final-result"));
var copy_or_move_1 = __importDefault(require("./01-dustbin/copy-or-move"));
var multiple_targets_1 = __importDefault(require("./01-dustbin/multiple-targets"));
var single_target_1 = __importDefault(require("./01-dustbin/single-target"));
var single_target_in_iframe_1 = __importDefault(require("./01-dustbin/single-target-in-iframe"));
var stress_test_1 = __importDefault(require("./01-dustbin/stress-test"));
var custom_drag_layer_1 = __importDefault(require("./02-drag-around/custom-drag-layer"));
var naive_1 = __importDefault(require("./02-drag-around/naive"));
var drag_sources_1 = __importDefault(require("./03-nesting/drag-sources"));
var drop_targets_1 = __importDefault(require("./03-nesting/drop-targets"));
var cancel_on_drop_outside_1 = __importDefault(require("./04-sortable/cancel-on-drop-outside"));
var simple_1 = __importDefault(require("./04-sortable/simple"));
var stress_test_2 = __importDefault(require("./04-sortable/stress-test"));
var drop_effects_1 = __importDefault(require("./05-customize/drop-effects"));
var handles_and_previews_1 = __importDefault(require("./05-customize/handles-and-previews"));
var drag_source_rerender_1 = __importDefault(require("./06-other/drag-source-rerender"));
var native_files_1 = __importDefault(require("./06-other/native-files"));
__export(require("./isDebugMode"));
exports.componentIndex = {
    chessboard: final_result_1.default,
    'dustbin-single-target': single_target_1.default,
    'dustbin-multiple-targets': multiple_targets_1.default,
    'dustbin-copy-or-move': copy_or_move_1.default,
    'dustbin-single-target-in-iframe': single_target_in_iframe_1.default,
    'dustbin-stress-test': stress_test_1.default,
    'drag-around-custom-drag-layer': custom_drag_layer_1.default,
    'drag-around-naive': naive_1.default,
    'nesting-drag-sources': drag_sources_1.default,
    'nesting-drop-targets': drop_targets_1.default,
    'sortable-cancel-on-drop-outside': cancel_on_drop_outside_1.default,
    'sortable-simple': simple_1.default,
    'sortable-stress-test': stress_test_2.default,
    'customize-drop-effects': drop_effects_1.default,
    'customize-handles-and-previews': handles_and_previews_1.default,
    'other-drag-source-rerender': drag_source_rerender_1.default,
    'other-native-files': native_files_1.default,
};
