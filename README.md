# TypeScript Type Annotation Bug

This repository demonstrates a subtle bug in TypeScript where a type annotation doesn't fully prevent runtime errors.  The `printNumber` function is designed to only accept non-negative numbers, but it still allows negative numbers to be passed, resulting in a runtime error. The solution demonstrates how to correctly enforce the type annotation to prevent this.