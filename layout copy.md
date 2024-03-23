---
marp: true
theme: uncover
_class: lead
paginate: true
backgroundColor: #fff
backgroundImage: url('https://marp.app/assets/hero-background.svg')
style: |
  .columns {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1rem;
  }
---


# Porth Dili

*   murat berk yetiştirir   03229008
*   barış ışık              03229004

---
#### introduction

-   porth nedir
-   porth da hello-world
-   stack ve toplama örneği
-   porth da fibonacci örneği

---
### porth nedir

-   kim yapmış  **tsoding**
-   nie yapmış  
###### recreational programming
    recreational programming nedir



---
### porth kurulumu

-   gitlab reposu
-   self hosted
```cl
$ fasm
```

---
### porth da hello-world

```php
    include "std.porth"

    proc main in
        "Hello, World!\n" puts
    end
```
```
$./porth com -r hello-world.porth
Hello, World!
```

---
### porth da input alma
```php
porth önreği
```


---
### fibonacci

<div class="columns">
<div>

```php
const N 400 end

proc main in
  0 1 while over N < do
    let a b in
      a print
      b a b +
    end
  end
  drop drop
end
```

</div>
<div>

```php
stack   : - -
a = 1
b = 1
```

```php
output  :
```
</div>
</div>

---
### sonuç

-   porth güzel beğenmeyeni götten  
-   porth farklı bakış açısık katıyo falan
-   farklı yaklaşımlar istiyor
-   eğlenceli

---
### bizi dinlediğiniz için teşekkürler

---
### QR kod