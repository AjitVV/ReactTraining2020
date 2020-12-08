import json

baseDir='./api/books'
bookList='./api/books.json'
bookFinalList='./api/books/books.json'
pathPrefix='/images/books/'

def change_cover(book, pathPrefix):
    
    if pathPrefix:
        book['cover']=f'{pathPrefix}{book["isbn"]}.jpg'

def main():
    with open(bookList) as src:
        books=json.load(src)
        size=len(books)
        count=0
        for book in books:
            count+=1
            print(f'processing {count} of {size} : {book["title"]}... ',end='\t')
            change_cover(book,pathPrefix)
            targetPath=f'{baseDir}/{book["isbn"]}.json'
            with open(targetPath,"w") as trgt:
                json.dump(book,trgt)

            print('done')
        with open(bookFinalList,'w') as l:
            json.dump(books,l)

    print('success')


if __name__=='__main__':
    main()
