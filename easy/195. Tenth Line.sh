# Read from the file file.txt and output the tenth line to stdout.
grep -n -E '.' file.txt | grep '^10:' | sed -e 's/^10://'
