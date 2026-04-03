#!/bin/sh
set -eu

ROOT_DIR=$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)
REF_SHELL_DIR="$ROOT_DIR/reference-shell"

swap_file() {
  TARGET=$1
  SOURCE=$2
  BACKUP="${TARGET}.pre_blocker_swap.bak"

  if [ ! -f "$SOURCE" ]; then
    echo "[ERROR] source missing: $SOURCE" >&2
    exit 1
  fi

  if [ ! -f "$TARGET" ]; then
    echo "[ERROR] target missing: $TARGET" >&2
    exit 1
  fi

  if [ ! -f "$BACKUP" ]; then
    cp "$TARGET" "$BACKUP"
    echo "[OK] backup created: $BACKUP"
  else
    echo "[SKIP] backup already exists: $BACKUP"
  fi

  cp "$SOURCE" "$TARGET"
  echo "[OK] swapped $TARGET <- $SOURCE"
}

echo "[INFO] applying blocker-closure swap sequence"

swap_file "$ROOT_DIR/index.html" "$ROOT_DIR/ROOT_ENTRY_CANONICAL_HANDOFF_DRAFT.html"
swap_file "$REF_SHELL_DIR/app.contract.js" "$REF_SHELL_DIR/app.contract.dropzone-ready.js"
swap_file "$REF_SHELL_DIR/index.contract.html" "$REF_SHELL_DIR/index.contract.dropzone-ready.html"

echo "[DONE] blocker-closure swap sequence applied"
echo "[NEXT] verify root entry handoff, dropzone asset resolution, intro disclosure, and persistent truth-boundary labels"
