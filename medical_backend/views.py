from django.shortcuts import render

def homepage(request):
    return render(request, 'homepage.html')

def services(request):
    return render(request, 'services.html')

def plasticSurgery(request):
    return render(request, 'plastic-surgery.html')

def faceLift(request):
    return render(request, 'plastic-surgery/face-lift.html')

def blepharoplasty(request):
    return render(request, 'plastic-surgery/blepharoplasty.html')

def rhinoplasty(request):
    return render(request, 'plastic-surgery/rhinoplasty.html')

def liposuction(request):
    return render(request, 'plastic-surgery/liposuction.html')

def abdominoplasty(request):
    return render(request, 'plastic-surgery/abdominoplasty.html')

def mamoplasty(request):
    return render(request, 'plastic-surgery/mamoplasty.html')

def lip(request):
    return render(request, 'plastic-surgery/lip.html')

def brachioplasty(request):
    return render(request, 'plastic-surgery/brachioplasty.html')

def lipofilling(request):
    return render(request, 'plastic-surgery/lipofilling.html')

def dentistry(request):
    return render(request, 'dentistry.html')

def clinics(request):
    return render(request, 'clinics.html')

def plasticSurgeons(request):
    return render(request, 'plastic-surgeons.html')

def dentists(request):
    return render(request, 'dentists.html')

def partner(request):
    return render(request, 'partner.html')