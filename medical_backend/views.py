from django.shortcuts import render

def homepage(request):
    return render(request, 'homepage.html')

def services(request):
    return render(request, 'services.html')

def plasticSurgery(request):
    return render(request, 'plastic-surgery.html')

def dentistry(request):
    return render(request, 'dentistry.html')

def clinics(request):
    return render(request, 'clinics.html')

def plasticSurgeons(request):
    return render(request, 'plastic-surgeons.html')

def dentists(request):
    return render(request, 'dentists.html')

def dentists(request):
    return render(request, 'partner.html')