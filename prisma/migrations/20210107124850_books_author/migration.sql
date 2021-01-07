-- CreateTable
CREATE TABLE "Book" (
"id" SERIAL,
    "title" TEXT NOT NULL,
    "cover" TEXT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Author" (
"id" SERIAL,
    "email" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_AuthorToBook" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Author.email_unique" ON "Author"("email");

-- CreateIndex
CREATE UNIQUE INDEX "_AuthorToBook_AB_unique" ON "_AuthorToBook"("A", "B");

-- CreateIndex
CREATE INDEX "_AuthorToBook_B_index" ON "_AuthorToBook"("B");

-- AddForeignKey
ALTER TABLE "_AuthorToBook" ADD FOREIGN KEY("A")REFERENCES "Author"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AuthorToBook" ADD FOREIGN KEY("B")REFERENCES "Book"("id") ON DELETE CASCADE ON UPDATE CASCADE;
