# kAXErrorIllegalArgument-XCTest-react-native

## Error

<img width="800" alt="Screenshot 2021-09-24 at 16 14 01" src="https://user-images.githubusercontent.com/5617793/134689355-b4ebe30a-697d-4670-ab41-052218335c9f.png">

```
Test Case '-[screensUITests.screensUITests test]' started.
    t =     0.00s Start Test at 2021-09-24 16:10:35.517
    t =     0.24s Set Up
    t =     0.48s Open org.reactjs.native.example.screens
    t =     0.60s     Launch org.reactjs.native.example.screens
    t =     2.19s         Setting up automation session
    t =     3.17s         Wait for org.reactjs.native.example.screens to idle
    t =    36.14s Waiting 15.0s for "wrapper" Other to exist
    t =    37.15s     Checking `Expect predicate `exists == 1` for object "wrapper" Other`
    t =    37.15s         Checking existence of `"wrapper" Other`
    t =    39.23s         Checking existence of `"wrapper" Other` (retry 1)
    t =    41.32s         Checking existence of `"wrapper" Other` (retry 2)
/Users/michaelknoch/dev/Repos/screens/ios/screensUITests/screensUITests.swift:15: error: -[screensUITests.screensUITests test] : Failed to get matching snapshots: Error kAXErrorIllegalArgument getting snapshot for element <AXUIElementRef 0x600001ba0090> {pid=33748} {uid=[ID:1 hash:0x0]}
    t =    43.48s         Capturing element debug description
    t =    43.48s Tear Down
Test Case '-[screensUITests.screensUITests test]' failed (43.684 seconds).
Test Suite 'screensUITests' failed at 2021-09-24 16:11:19.200.
     Executed 1 test, with 1 failure (0 unexpected) in 43.684 (43.686) seconds
Test Suite 'screensUITests.xctest' failed at 2021-09-24 16:11:19.201.
     Executed 1 test, with 1 failure (0 unexpected) in 43.684 (43.687) seconds
Test Suite 'Selected tests' failed at 2021-09-24 16:11:19.202.
     Executed 1 test, with 1 failure (0 unexpected) in 43.684 (43.689) seconds
```

## Reproduce

-   clone this repo
-   npm i && cd ios && pod install
-   start test function `test` of screensUITests via xcode
