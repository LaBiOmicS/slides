#!/bin/bash
convert -alpha set -channel A -evaluate set 40% "$@"
