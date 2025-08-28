def capitalize_first_letters(sentence):
    words = sentence.split()
    capitalized_words = []

    for word in words:
        if word:
            capitalized_word = word[0].upper() + word[1:]
            capitalized_words.append(capitalized_word)

    return ' '.join(capitalized_words)

capitalize_first_letters()