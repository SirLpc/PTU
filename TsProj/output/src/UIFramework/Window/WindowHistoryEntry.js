"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WindowHistoryEntry = void 0;
class WindowHistoryEntry {
    screen;
    properties;
    constructor(screen, properties) {
        this.screen = screen;
        this.properties = properties;
    }
    Show() {
        this.screen.Show(this.properties);
    }
}
exports.WindowHistoryEntry = WindowHistoryEntry;
//# sourceMappingURL=WindowHistoryEntry.js.map