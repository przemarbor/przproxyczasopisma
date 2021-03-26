

# Skrypt przetwarzajacy liste domen do postaci wygodnej do wklejenia do pliku .pac


# On in-place editing in sed:
# https://stackoverflow.com/a/6484372/4649238
 
# delete all comment lines
# https://stackoverflow.com/questions/8206280/delete-all-lines-beginning-with-a-from-a-file
sed '/^#/ d' < lista.txt > output1.txt
# delete all empty lines
# https://stackoverflow.com/questions/16414410/delete-empty-lines-using-sed
sed -r '/^\s*$/d' output1.txt > output2.txt

# add pattern at the begining of each line
# https://linuxconfig.org/add-character-to-the-beginning-of-each-line-using-sed
sed 's/^/"*/' output2.txt > output3.txt

# add pattern at the end of each line
# https://askubuntu.com/questions/537967/appending-to-end-of-a-line-using-sed
sed 's/$/*",/' output3.txt > output4.txt

# delete last character in the file
sed '$ s/.$//'  output4.txt > output5.txt

cp output5.txt output.txt
rm output1.txt output2.txt output3.txt output4.txt output5.txt
