import json
a_file = open('pokemon.json')
json_object = json.load(a_file)
a_file.close()
pokemonList = []

for pokemon in json_object:
    for key, value in pokemon.items():
        if key == "name":
            split_string = value.split(" ")
            substring = split_string[0]
            pokemon[key] = substring
            pokemonList.append({
                key: value
            })
            break

with open ('updated.json', 'w')as fout:
    fout.write("[ \n")
    for dic in json_object:
        json.dump(dic, fout)
        fout.write(", \n")
    
    fout.write("\n ]")