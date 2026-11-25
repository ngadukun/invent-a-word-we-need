# Invent a Word We Need

[![make.fun](https://make.fun/badge/u-deranalabs-invent-a-word-we-need-17a020e0.svg)](https://make.fun/c/u-deranalabs-invent-a-word-we-need-17a020e0)
[![rank](https://make.fun/badge/u-deranalabs-invent-a-word-we-need-17a020e0/ngadukun/invent-a-word-we-need/rank.svg)](https://make.fun/c/u-deranalabs-invent-a-word-we-need-17a020e0)
[![reward](https://make.fun/badge/u-deranalabs-invent-a-word-we-need-17a020e0/ngadukun/invent-a-word-we-need/reward.svg)](https://make.fun/c/u-deranalabs-invent-a-word-we-need-17a020e0)

Entry for the [Invent a Word We Need](https://make.fun/c/u-deranalabs-invent-a-word-we-need-17a020e0) bounty on [make.fun](https://make.fun/).

## The word

**doorpause** — the blank moment of standing in a doorway, having forgotten why you walked into the room.

Everyone knows the moment: you cross a threshold with a purpose, and by the
time you arrive the purpose has evaporated. Psychologists call it the doorway
effect, but everyday English has no word for it — until now.

## How it works

`main.ts` writes the word and its one-line definition to
`$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`), and refuses to
write anything outside the competition's 1–140 character gate.

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
