import XCTest
import SwiftTreeSitter
import TreeSitterPlatypus

final class TreeSitterPlatypusTests: XCTestCase {
    func testCanLoadGrammar() throws {
        let parser = Parser()
        let language = Language(language: tree_sitter_platypus())
        XCTAssertNoThrow(try parser.setLanguage(language),
                         "Error loading Platypus grammar")
    }
}
