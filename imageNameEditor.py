import json
import os

a_file = open('pokemon.json')
json_object = json.load(a_file)
a_file.close()
pokemonList = []
count = 0

for pokemon in json_object:
    for key, value in pokemon.items():
        if key == "name":
            pokemonList.append({
                value
            })
            break

for root, dirs, files in os.walk("./sprites/"):
    while count < len(pokemonList):    
        for filename in files:
            for x in pokemonList[count]:
                os.rename(root + filename,root + x + '.png')
                print(x + '.png')
                print(filename)
                count += 1
