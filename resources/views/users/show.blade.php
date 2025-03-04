@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-12 col-md-8">
            <div class="card">
                <div class="card-header">User Details</div>

                <div class="card-body">
                    <div class="mb-3">
                        <strong>Name:</strong> {{ $user->name }}
                    </div>
                    <div class="mb-3">
                        <strong>Email:</strong> {{ $user->email }}
                    </div>
                    <div class="mb-3">
                        <strong>Created At:</strong> {{ $user->created_at->format('d M Y') }}
                    </div>
                    
                    <a href="{{ route('users.index') }}" class="btn btn-secondary w-100 w-md-auto">Back to Users</a>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
