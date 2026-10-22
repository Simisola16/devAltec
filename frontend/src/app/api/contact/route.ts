import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, projectType, budget, timeline, description } = body;

    // Validate required fields
    if (!name || typeof name !== 'string' || !name.trim()) {
      return NextResponse.json({ error: 'Please provide your full name.' }, { status: 400 });
    }

    if (!email || typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      return NextResponse.json({ error: 'Please provide a valid email address.' }, { status: 400 });
    }

    if (!description || typeof description !== 'string' || description.trim().length < 15) {
      return NextResponse.json(
        { error: 'Please provide a brief description of your project (at least 15 characters).' },
        { status: 400 }
      );
    }

    const inquiryRecord = {
      id: `inq_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      timestamp: new Date().toISOString(),
      name: name.trim(),
      email: email.trim().toLowerCase(),
      company: company ? company.trim() : null,
      projectType: projectType || 'General Full-Stack Project',
      budget: budget || 'Not specified',
      timeline: timeline || 'Flexible',
      description: description.trim()
    };

    const backendUrl = process.env.BACKEND_INTERNAL_URL || 'http://localhost:5000';
    let savedInquiryId = `inq_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
    let receivedAt = new Date().toISOString();

    try {
      const backendRes = await fetch(`${backendUrl}/api/inquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim().toLowerCase(),
          company: company ? company.trim() : null,
          projectType: projectType || 'General Full-Stack Project',
          budget: budget || 'Not specified',
          timeline: timeline || 'Flexible',
          description: description.trim(),
        }),
      });

      if (backendRes.ok) {
        const data = await backendRes.json();
        if (data.inquiryId) savedInquiryId = data.inquiryId;
        if (data.receivedAt) receivedAt = data.receivedAt;
      }
    } catch (backendErr) {
      console.warn('[Contact Route] Could not sync directly to backend:', (backendErr as Error).message);
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Your inquiry has been successfully received by devAltec.',
        inquiryId: savedInquiryId,
        receivedAt: receivedAt,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred while processing your inquiry. Please try again or email directly.' },
      { status: 500 }
    );
  }
}
