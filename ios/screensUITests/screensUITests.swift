//
//  screensUITests.swift
//  screensUITests
//
//  Created by Michael Knoch on 21.09.21.
//

import XCTest

class screensUITests: XCTestCase {
  func test() throws {
    let app = XCUIApplication()
    app.launch()

    XCTAssertTrue(app.otherElements["wrapper"].waitForExistence(timeout: 15))
    XCTAssertTrue(app.otherElements["element"].waitForExistence(timeout: 15))
  }
}
