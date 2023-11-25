WILAYAH =[]
JENENG =[]


def siswa(nama,asal,total):
    for x in range(total):
        print('siswa ke-',x+1)
        nama = input('masukkan nama')
        asal = input('masukkan nama')

        WILAYAH.append(asal)
        JENENG.append(nama)


def lihatnama(nama,asal,total):
    for x in range(total):
        print('NAMA  | ASAL')
        print('{} {} '.format(WILAYAH[x],JENENG[x]))

total = int(input('masukkan total siswa'))


print(siswa(WILA