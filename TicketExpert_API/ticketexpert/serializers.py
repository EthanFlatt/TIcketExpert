from rest_framework import serializers
from .models import Venue, Event

class EventSerializer(serializers.HyperlinkedModelSerializer):
    venue = serializers.HyperlinkedRelatedField(
        view_name = 'venue_detail',
        read_only = True
    )

    venue_id = serializers.PrimaryKeyRelatedField(
        queryset = Venue.objects.all(),
        source = 'venue'
    )

    class Meta:
        model = Event
        fields = ('id', 'performers', 'venue', 'venue_id', 'date', 'description', 'admission', 'show_start_time', 'photo_url')

class VenueSerializer(serializers.HyperlinkedModelSerializer):
    events = serializers.HyperlinkedRelatedField(
        view_name = 'event_detail',
        many = True,
        read_only = True
    )

    venue_url = serializers.ModelSerializer.serializer_url_field(
        view_name = 'venue_detail'
    )

    class Meta:
        model = Venue
        fields = ('id', 'name', 'venue_url', 'events', 'location', 'max_seats', 'description', 'photo_url')

