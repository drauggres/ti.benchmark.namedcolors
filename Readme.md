# Results

* `prefetch 8.2.1` - stats for the application compiled with SDK 8.2.1 and `colors-with-fetch.js`
* `prefetch 9.2.2` - SDK 9.2.2 and `colors-with-fetch.js`
* `named 9.2.2` - SDK 9.2.2 and `colors-only-name.js`

Note: named color were added in [TIMOB-27895](https://jira.appcelerator.org/browse/TIMOB-27895) (SDK 9.1.0)

## Load Time

<details>
 <summary>Click to open</summary>

* `parse`:
  * Read `semantics.colors.json`
  * parse it
  * fetch each color with `Ti.UI.fetchSemanticColor`
* `create`: `Ti.UI.create*`
* `layout`: first `postlayout` event on the window

![android](results/time/android.png)

![ios](results/time/ios.png)

</details>


## Memory

### Android. Java Heap Dump File Size.
<details>
 <summary>Click to open</summary>

Collected with command:
* `adb shell 'am dumpheap PID /data/local/tmp/dump.hprof'`

Note: in SDK 8.2.1 for Android `Ti.UI.fetchSemanticColor` returns `string` value; in 9.2.2 - ColorProxy (?)

![android](results/memory_java/android.png)
</details>

### iOS. Native heap size
<details>
 <summary>Click to open</summary>

`All Heap & Anonymous VM` `Total Bytes` after 50 seconds uptime.
![ios](results/memory_native/ios.png)
</details>

### JavaScript heap snapshot size.
<details>
 <summary>Click to open</summary>
 
Value reported in `Statistics` as **`Total`** for a heap snapshot. 
![android](results/memory_js/android.png)

Size of an exported heap snapshot (not the actual heap size!).
![ios](results/memory_js/ios.png)
</details>
